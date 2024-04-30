import {
  EmailShare,
  LinkedinShare,
  TwitterShare,
  WhatsappShare,
} from "react-share-kit";

export default function ShareModal() {
  const shareButtonProps = {
    url: "https://www.pleasehire.me.uk/",
    title: "Please Hire Me!",
    description: "The ultimate application form for Junior Developers.",
    round: true,
    size: 48,
  };

  return (
    <dialog id="share-modal" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Weren't successful?</h3>
        <p className="py-4">
          Invite your hapless jobseeker friends to apply - maybe they'll land
          their dream role!
        </p>
        <div className="flex justify-evenly">
          <LinkedinShare {...shareButtonProps} />
          <TwitterShare url={"https://www.pleasehire.me.uk/"} round size={48} />
          <WhatsappShare
            url={"https://www.pleasehire.me.uk/"}
            round
            size={48}
          />
          <EmailShare url={"https://www.pleasehire.me.uk/"} round size={48} />
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-primary">Done</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
