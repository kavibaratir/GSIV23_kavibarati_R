import { InputGroup, Input, InputGroupText } from "reactstrap";
import { css } from "@emotion/css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { searchOption } from "../store/slices/searchSlice";
const headerCSS = {
  container: css({
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "8px",
    paddingBottom: "8px",
    boxShadow: "0px 0px 16px #00000088",
    paddingRight: "10px",
    paddingLeft: "10px"
  }),
  searchCSS: css({
    width: 600
  })
};
const Header = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={headerCSS.container}>
      <InputGroup className={headerCSS.searchCSS}>
        <InputGroupText>
          <i className="bi bi-search"></i>
        </InputGroupText>

        <Input
          placeholder="Search"
          data-testid="Searchbutton"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
            dispatch(searchOption(e.target.value));
          }}
        />
      </InputGroup>
      <div className="px-2">
        <i className="bi bi-house-door-fill"></i>
      </div>
    </div>
  );
};
export default Header;
