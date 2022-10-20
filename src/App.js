import Button from "./Button";
const App = () => {
  return (
    <div>
      <div className="list-section">
        <li className=" list-second list-first">Home330</li>
        <li className="list-second">Contact us</li>
        <li className=" list-second list-first">About me</li>
        <li className="list-second">Company</li>
      </div>
      <h1>Useful website</h1>
      <h3>Which Website do you want to open</h3>
      <div className="btn-section">
        <Button name="Google" link="https://www.google.com" />
        <Button name="facebook" link="https://www.facebook.com" />
      </div>
      <br></br>
      <div className="btn-section">
        <Button name="Instagram" link="https://www.instagram.com" />
        <Button name="IPO Result" link="https://iporesult.cdsc.com.np/" />
      </div>
    </div>
  );
};
export default App;
