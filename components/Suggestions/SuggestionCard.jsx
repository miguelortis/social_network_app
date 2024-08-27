import "./suggestionCard.css";

const SuggestionCard = ({ coverPhoto, profilePicture, userName, nickname }) => {
  return (
    <div className="s-card-container">
      <div className="s-card">
        {/* card elements */}
        <button onClick={() => console.log("sugerencia clickeada")}>
          <div className="s-user-cover-wrapper">
            <img src={coverPhoto} />
          </div>
          <div className="s-free-label">Gratis</div>
          <div className="s-content">
            <div className="s-avatar">
              <div className="img-wrapper">
                <img src={profilePicture} />
              </div>
            </div>
            <div className="s-nickname">
              <div className="s-nick-name">{nickname}</div>
            </div>
            <div className="s-username">
              <div className="s-user-name">{`@${userName}`}</div>
            </div>
          </div>
        </button>
        {/* card menu */}
        <div></div>
      </div>
    </div>
  );
};

export default SuggestionCard;
