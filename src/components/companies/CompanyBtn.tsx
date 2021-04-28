import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnContainer: {
      display: "flex",
      width: "50%",
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important",
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.3,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          border: "4px solid currentColor",
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
        theme.spacing(1) + 6
      }px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  })
);

type IProps = {
  title: string;
  handleToggle: () => void;
  onSetHome: Function;
};
const CompanyBtn = (props: IProps) => {
  const { title, handleToggle, onSetHome } = props;
  const c = useStyles();
  const images = [
    {
      url:
        "https://d2tyltutevw8th.cloudfront.net/media/image/largestcompanies-1200-1606765438.jpg",
      width: "40%",
    },
  ];

  return (
    <div className={c.btnContainer}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={title}
          onClick={() => {
            handleToggle();
            onSetHome();
          }}
          className={c.image}
          focusVisibleClassName={c.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={c.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={c.imageBackdrop} />
          <span className={c.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={c.imageTitle}
            >
              {title}
              <span className={c.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
};

export default CompanyBtn;
