import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useState } from "react";

interface Item {
  id: number;
  title: string;
  selected: boolean;
  key: string;
}

interface DropdownProps {
  list: Item[];
  defaultTitle?: string;
  setList: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Dropdown = ({
  list,
  defaultTitle = "Select something",
  setList,
}: DropdownProps) => {
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(
    list.find((x) => x.selected)?.title || defaultTitle
  );

  const toggleList = () => setListOpen((x) => !x);

  const selectItem = (item: Item) => {
    const { title, id } = item;

    setHeaderTitle(title);
    setListOpen(false);
    resetThenSet(id);
  };

  const resetThenSet = (id: number) => {
    const locationsNew = [...list];

    locationsNew.forEach((item) => (item.selected = false));
    locationsNew[id].selected = true;

    setList(locationsNew);
  };

  const emojiList = ["🐡", "🦧", "👩‍🎤", "🙀", "⭐️", "😽", "👽"];
  const randomNumber10 = () => Math.floor(Math.random() * emojiList.length);

  const [emoji, setEmoji] = useState(emojiList[0]);

  useEffect(() => {
    if (headerTitle) setEmoji(emojiList[randomNumber10()]);
  }, [headerTitle]);

  return (
    <DdWrapper>
      <DdHeader type="button" onClick={toggleList} listOpen={listOpen}>
        <DdHeaderTitle>
          {headerTitle} {emoji}
        </DdHeaderTitle>
        {listOpen ? <Chevron direction="up" /> : <Chevron direction="down" />}
      </DdHeader>
      {listOpen && (
        <DdList role="list">
          {list.map((item) => (
            <DdListItem
              type="button"
              key={item.title}
              onClick={() => selectItem(item)}
            >
              {item.selected && "✅"} {item.title}
            </DdListItem>
          ))}
        </DdList>
      )}
    </DdWrapper>
  );
};

export default Dropdown;

const DdWrapper = styled.div`
  position: relative;
  width: 12rem;
  user-select: none;
`;
const DdHeader = styled.button<{ listOpen: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid rgb(223, 223, 223);
  border: 1px solid var(--gray-2);
  border-radius: ${({ listOpen }) =>
    listOpen ? "var(--gap-3xs) var(--gap-3xs) 0 0" : "var(--gap-3xs)"};
  background-color: #fff;
  cursor: pointer;
  padding: var(--gap-4xs) var(--gap-3xs);
`;
const DdHeaderTitle = styled.div`
  width: 90%;
  flex-shrink: 0;
  text-align: left;
`;
const DdList = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  max-height: 10rem;
  border: 1px solid rgb(223, 223, 223);
  border: 1px solid var(--gray-2);
  border-top: none;
  border-radius: 0 0 var(--gap-3xs) var(--gap-3xs);
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
  background-color: white;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
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

interface ChevronProps {
  direction?: "up" | "down";
}

const Chevron = ({ direction = "up" }: ChevronProps) => {
  console.log(direction);
  return (
    <StyledChevronWrapper>
      {direction !== "up" ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      )}
    </StyledChevronWrapper>
  );
};

const StyledChevronWrapper = styled.span`
  height: 100%;
  padding: 0.1rem;

  & > svg {
    height: 100%;
    width: 100%;
  }
`;
