import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";

interface DropdownProps {
  list: { title: string; id: number; selected: boolean }[];
  defaultTitle?: string;
  setList: React.Dispatch<React.SetStateAction<any[]>>;
}

const dropdownVariants = {
  collapsed: {
    opacity: 0,
    height: "0rem",
    transition: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

const Dropdown = ({
  list,
  defaultTitle = "Select something",
  setList,
}: DropdownProps) => {
  const [listOpen, setListOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(
    list.find((x) => x.selected)?.title || defaultTitle
  );

  const toggleList = () => {
    setListOpen((x) => !x);
    setBackdropOpen((x) => !x);
  };

  const closeList = () => {
    setListOpen((x) => false);
    setBackdropOpen((x) => false);
  };

  const selectItem = (item: any) => {
    const { title, id } = item;

    setHeaderTitle(title);
    setListOpen(false);
    setBackdropOpen(false);
    resetThenSet(id);
  };

  const resetThenSet = (id: number) => {
    const listNew = [...list];

    listNew.forEach((item) => (item.selected = false));
    listNew[id].selected = true;

    setList(listNew);
  };

  return (
    <DdWrapper>
      <DdHeader type="button" onClick={toggleList} listOpen={listOpen}>
        <DdHeaderTitle>{headerTitle}</DdHeaderTitle>
        <Chevron listOpen={listOpen} />
      </DdHeader>
      <AnimatePresence>
        {listOpen && (
          <>
            <DdList
              role="list"
              variants={dropdownVariants}
              initial="collapsed"
              animate="open"
              exit="collapsed"
            >
              {list.map((item) => (
                <DdListItem
                  type="button"
                  key={item.title}
                  onClick={() => selectItem(item)}
                >
                  {item.selected ? (
                    <strong>{item.title}</strong>
                  ) : (
                    <>{item.title}</>
                  )}
                </DdListItem>
              ))}
            </DdList>
          </>
        )}
      </AnimatePresence>
      {backdropOpen && <DdBackdrop listOpen={listOpen} onClick={closeList} />}
    </DdWrapper>
  );
};

export default Dropdown;

const DdWrapper = styled.div`
  position: relative;
  width: 15rem;
  user-select: none;
`;
const DdHeader = styled.button<{ listOpen: boolean }>`
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid var(--gray-2);
  border-radius: ${({ listOpen }) =>
    listOpen ? "var(--gap-3xs) var(--gap-3xs) 0 0" : "var(--gap-3xs)"};
  background-color: #fff;
  cursor: s-resize;
  padding: var(--gap-4xs) var(--gap-3xs);
  transition: border-radius 1000ms ease;

  &:active {
    border-color: magenta;
  }
  & > * {
    transition: scale 100ms;
    transform-origin: left;
  }
  &:active > * {
    scale: 0.97;
  }
`;
const DdHeaderTitle = styled.div`
  width: 90%;
  flex-shrink: 0;
  text-align: left;
`;
const DdList = styled(m.div)`
  position: absolute;
  z-index: 3;
  width: 100%;
  max-height: 10rem;
  border: 1px solid var(--gray-2);
  border-top: none;
  border-radius: 0 0 var(--gap-3xs) var(--gap-3xs);
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
  background-color: white;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;
const DdBackdrop = styled.div<{ listOpen: boolean }>`
  display: ${({ listOpen }) => (listOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  cursor: default;
  content: " ";
  z-index: 2;
`;
const DdListItem = styled.button`
  width: 100%;
  padding: var(--gap-4xs) var(--gap-3xs);
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  text-align: left;

  &.no-result {
    font-weight: normal;
    cursor: default;
  }

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: var(--yellow-1);
      color: #fff;
    }
  }
  &:active {
    background-color: var(--yellow-2);
    color: #fff;
  }

  & > span > svg > path {
    fill: white;
  }
`;

const Chevron = ({ listOpen = false }) => {
  return (
    <StyledChevronWrapper listOpen={listOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
    </StyledChevronWrapper>
  );
};

const StyledChevronWrapper = styled.span<{ listOpen: boolean }>`
  height: 100%;
  width: 100%;
  aspect-ratio: 1;
  padding: 0.1rem;
  transition: transform 200ms ease;
  transform-origin: center;
  transform: ${({ listOpen }) =>
    listOpen ? "rotate(180deg)" : "rotate(0deg)"};

  & > svg {
    height: 100%;
    width: 100%;
  }
`;
