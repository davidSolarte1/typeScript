import "./App.css";
import React from "react";

type CardWithPhotoProps = {
  variant: "cardWithPhoto";
  photoUrl: string;
  title: string;
};

type CardWithIconProps = {
  variant: "cardWithIcon";
  icon: React.ReactNode;
  title: string;
};

type Props = CardWithPhotoProps | CardWithIconProps;

const Card: React.FC<Props> = (props) => {
  const { variant, title } = props;

  // if (variant === "cardWithPhoto") {
  //   const { photoUrl } = props as CardWithPhotoProps;

  //   console.log(`${photoUrl}`);
  // } else if (variant === "cardWithIcon") {
  //   const { icon } = props as CardWithIconProps;

  //   console.log(`${icon}`);
  // }


  return <div>{title}</div>;
};

const App: React.FC = () => {
  const cardWithPhotoExample: CardWithPhotoProps = {
        variant:"cardWithPhoto",
        photoUrl:"98",
        title:"photo",
  };

  const cardWithIconExample: CardWithIconProps = {
        variant:"cardWithIcon",
        icon:9,
        title:"icon",
  };

  return (
    <div>
      <Card {...cardWithPhotoExample}/>
      <Card {...cardWithIconExample}/>

    </div>
  );
};

export default App;
