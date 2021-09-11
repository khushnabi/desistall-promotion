import lady3 from '../../images/lady-3.svg';

function JoiningSection() {
  return (
    <div className="w-full bg-white joining-section">
      <div className="container w-3/4 mx-auto py-16 my-auto flex justify-between">
        <div className="w-1/2 md:pr-2">
          <iframe width="100%" height="auto" src="https://www.youtube.com/embed/iH1uFtxzu0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="w-1/2 align-self-center">
            <p className="text-4xl font-semibold leading-tight mb-6">Become a Member</p>
            <p className="text-lg mb-6 w-3/4">Join our exclusive community of blockchain technology enthusiasts by owning a Desi Sol. Share ideas, get help, meet over coffee and build technologies of the future.</p>
            <p className="text-lg mb-6">Mint Price: 0.99 SOL </p>
        </div>
      </div>
    </div>
  );
}

export default JoiningSection;
