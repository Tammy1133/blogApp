const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="container text-center"
      style={{ marginTop: "80px", marginBottom: "70px" }}
    >
      <h1 style={{ color: "#459e06" }}> Testimonial section</h1>

      <div className="d-flex justify-content-center flex-wrap mt-5">
        <figure className="testDiv" data-aos="fade-up">
          <figcaption className="">
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In qui
                repudiandae aspernatur impedit vero ut, voluptatibus ducimus est
                hic esse, neque placeat totam sit a veritatis corporis unde
                repellendus doloribus?
              </p>
            </blockquote>
            <h3>Samuel Justin</h3>
            <h4>Google Inc.</h4>
          </figcaption>
        </figure>
        <figure className="testDiv" data-aos="fade-up">
          <figcaption>
            <blockquote>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                nulla in molestiae dolore ad dicta! Atque odio, voluptatem
                repellendus repudiandae quas officiis eaque.
              </p>
            </blockquote>
            <h3>Costipher Ustiphor</h3>
            <h4>Facebook</h4>
          </figcaption>
        </figure>
        <figure className="testDiv" data-aos="fade-up">
          <figcaption className=" d-flex flex-column justify-content-center">
            <blockquote>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci, repellat!
              </p>
            </blockquote>
            <h3>Johnson Idowu</h3>
            <h4>Twitter</h4>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Testimonial;
