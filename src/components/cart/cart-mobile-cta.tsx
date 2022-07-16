import React, { useState } from "react";
import SlideUpModal from "../slide-up-modal";

const CartMobileCta = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <SlideUpModal isClosed={isClosed}>
      <div>asdalkdmlsk</div>
    </SlideUpModal>
  );
};

export default CartMobileCta;
