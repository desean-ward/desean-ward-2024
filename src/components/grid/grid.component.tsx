import React from "react";
import { GridContainer } from "./grid.styles";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid.ui";
import { gridItems } from "../../../data";

const Grid = () => {
  return (
    <GridContainer id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </GridContainer>
  );
};

export default Grid;
