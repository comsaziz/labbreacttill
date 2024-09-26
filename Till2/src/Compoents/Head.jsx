function Head() {
  const backgroundStyle = {
    backgroundImage: 'url(https://img.notionusercontent.com/s3/prod-files-secure%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png/size/w=1420?exp=1727433093&sig=55VsFI-gS4jjOy3R7xL8-crKIgcAEOnUVzqWnKeLSbQ)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
    width: '100%', 
  };

  return (
    <div style={backgroundStyle} className="relative flex items-center justify-start text-white">
      <div className="ml-10 max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-left">FreshGood</h1>
        <h2 className="text-2xl mb-2 text-left">Concisely</h2>
        <p className="text-xl text-left mb-4">describe your product or service</p>

        <p className="text-lg text-left mb-6">
          No need to get clever. Tell people exactly what you're offering,
          then use this space to communicate your key value proposition.
        </p>

        <button
          className="bg-[#fbb104] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e09c03] transition duration-300 ease-in-out"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Head;
