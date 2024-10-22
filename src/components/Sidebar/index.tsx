import React from "react";
import StickyBox from "react-sticky-box";

import List from "../List";
import FollowSugestion from "../FollowSugestion";
import News from "../News";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSugestion name="Phil Foden" nickname="@philfoden" />,
              <FollowSugestion name="Toni Kroos" nickname="@ToniKroos" />,
              <FollowSugestion name="Martin Odegaard" nickname="@Odegaard" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;
