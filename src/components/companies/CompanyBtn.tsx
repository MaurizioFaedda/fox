import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnCompany: {
      backgroundColor: "red",
    },
  })
);

type IProps = {
  title: string;
  goPageCompany: () => void;
  //   onGoVa
};
const CompanyBtn = (props: IProps) => {
  const { title, goPageCompany } = props;
  const c = useStyles();

  return (
    <button className={c.btnCompany} onClick={goPageCompany}>
      {title}
    </button>
  );
};

export default CompanyBtn;
