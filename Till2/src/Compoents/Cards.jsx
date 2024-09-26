function Cards() {
  return (
    <>
      <h2 className="text-center text-xl font-bold mb-5">
        Here are some of the benefits of <br /> your offer
      </h2>
      <p className="text-center mb-5">
        Explain what makes your product or service great. Talk about the features in a way that highlights the real value people get out of them.
      </p>
      <div className="flex flex-row items-center justify-center p-5 bg-white">
   
        <div className="flex flex-row justify-around w-full">
     
          <div className="card flex flex-col justify-center items-center text-center p-3 m-3 w-64"> 
            <div>
              <img
                src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F33e082c2-a488-4061-9056-230b793e45d2%2FUntitled.png?table=block&id=fff185a2-dff1-815d-bfc1-d89d87dd6ddf&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=120&userId=&cache=v2"
                alt=""
                className="w-full h-32 object-contain" 
              />
            </div>
            <div className="card-body mt-3">
              <h5 className="card-title" style={{ color: "black" }}>
                Benefit 1
              </h5>
              <p className="card-text" style={{ color: "black" }}>
                For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients.
              </p>
            </div>
          </div>

       
          <div className="card flex flex-col justify-center items-center text-center p-3 m-3 w-64"> 
            <div>
              <img
                src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F1146d831-7a41-4d41-9684-afbb9a282e5c%2FUntitled.png?table=block&id=fff185a2-dff1-819e-b49d-d427bcb4234b&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=210&userId=&cache=v2"
                alt=""
                className="w-full h-32 object-contain" 
              />
            </div>
            <div className="card-body mt-3">
              <h5 className="card-title" style={{ color: "black" }}>
                Benefit 2
              </h5>
              <p className="card-text" style={{ color: "black" }}>
                Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card flex flex-col justify-center items-center text-center p-3 m-3 w-64"> 
            <div>
              <img
                src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fe1e4f38a-a958-4b5d-bcb0-eddce8b433c0%2FUntitled.png?table=block&id=fff185a2-dff1-818a-9e69-c9f78f78f9f7&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=120&userId=&cache=v2"
                alt=""
                className="w-full h-32 object-contain" 
              />
            </div>
            <div className="card-body mt-3">
              <h5 className="card-title" style={{ color: "black" }}>
                Benefit 3
              </h5>
              <p className="card-text" style={{ color: "black" }}>
                You could also add buttons to this section and share links to other products or available delivery methods.
                What our customers say
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
