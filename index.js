const Notification = (props) => {
  const { className, text, image } = props;
  return (
    <div className={className}>
      <img className="icon" src={image} />
      <p className="message"> {text}</p>
    </div>
  );
};

const element = (
  <div className="notification-container">
    <h1> Notifications </h1>
    <div class="card">
      <Notification
        className="primary"
        text="Information Message"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success"
        text="Success Message"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning"
        text="Warning Message"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="danger"
        text="Error Message"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
