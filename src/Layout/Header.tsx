import { InputGroup, Input, InputGroupText } from "reactstrap";
import { css } from "@emotion/css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { searchOption ,displaySearch } from "../store/slices/searchSlice";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  const displaySearchfield = useSelector(
    (state: RootState) => state.searchData.isDetailpageOpened
  );
  const backToListPage=()=>{
    dispatch(displaySearch(false))
    navigate("/"); 
  }
  return (
    <div className={headerCSS.container}>
      { !displaySearchfield ?
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
      </InputGroup>:<div><h4>Movie Details</h4></div>}
      <div className="px-2">
        <i className="bi bi-house-door-fill"></i>{" "}
        {displaySearchfield ? <i title="back" style={{cursor:"pointer"}}className="bi bi-arrow-90deg-left" onClick={backToListPage}></i>:""}
      </div>
    </div>
  );
};
export default Header;
