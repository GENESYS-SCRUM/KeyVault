import { BsEyeSlash } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import "./AddKey.css";
const AddKey = () => {
  return (
    <>
      <div>
        <div className="addkey">
          <h1>Add a Key</h1>
          <i>
            <MdOutlineCancel />
          </i>
        </div>
      </div>
      <div>
        <h4>Preffered Name</h4>
        <input type="text" placeholder="Give your key any name of choice" />
      </div>
      <div>
        <h4>Website link</h4>
        <input type="text" placeholder="Paste link here" />
      </div>
      <div>
        <h4>User name/ID</h4>
        <input type="text" placeholder="Enter Username" />
      </div>
      <div>
        <h4>Password</h4>
        <input type="text" placeholder="Input password" /> <BsEyeSlash />
      </div>
      <button>Create a key</button>
      <br />
      <button>Cancel</button>
    </>
  );
};

export default AddKey;
