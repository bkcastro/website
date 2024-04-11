
function CopyableText({ text }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div
      className="cursor-pointer hover:bg-green-600"
      onClick={handleCopy}
    >
      {text}
    </div>
  );
}

function Contact() {
  return (
    <div className="w-screen h-screen text-green-600 font-thin text-center bg-black flex justify-center">

      <div className="m-auto">
        <p><span className="hover:bg-green-600">Brandon </span> | <span className="hover:bg-green-600">Erick</span> | <span className="hover:bg-green-600">Bkcastro</span></p>
        <CopyableText text="c1brandon626@gmail.com" />
        <a className="cursor-pointer underline hover:bg-green-600">Book a meeting</a>
      </div>
    </div>
  );
}

export default Contact;
