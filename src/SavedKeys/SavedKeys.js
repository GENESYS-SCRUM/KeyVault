import { GiHumanTarget } from "react-icons/gi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./SavedKeys.css";
const SavedKeys = () => {
  return (
    <>
      <div>
        <div className="vault header">
          <h1>Key Vault</h1>

          <i>
            <GiHumanTarget />
          </i>
          <i>
            {" "}
            <AiOutlinePlusCircle />{" "}
          </i>
          <h1>Support</h1>
        </div>
        <i>
          <button>
            <AiOutlineSearch />{" "}
            <input type="text" placeholder="Search your saved keys" />{" "}
          </button>
        </i>
        <p>Saved Keys</p>
        <p>
          Sort by <TiArrowSortedDown />
        </p>
        <p>No saved keys</p>
        <Link to="/addkey">Add a key</Link>
      </div>
    </>
  );
};

export default SavedKeys;
