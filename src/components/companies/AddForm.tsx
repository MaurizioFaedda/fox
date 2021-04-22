import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

type IProps = {
  open: boolean;
  handleClose: Function;
};

const AddForm = (props: IProps) => {
  const { open, handleClose } = props;
  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h1>prova</h1>
        {/* {body} */}
      </Modal>
    </div>
  );
};

export default AddForm;
