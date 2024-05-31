import illustration from './someAssets/illustration-working.svg';
import './someCss/Banner.css';

function  Banner(){
    return (
        <>
            <section className="home row col-lg-10 col-sm-12 mx-auto container py-5">
    <div className="home-desc col-lg-6 col-sm-12 d-flex justify-content-center align-items-center flex-column py-3 order-lg-1 order-sm-2">
      <h1 className="home-head font-weight-bold py-sm-4 py-lg-0 display-sm-4 text-center ">More than just <br/>shorter links</h1>
      <p className="home-para text-left font-weight-normal py-sm-4 py-lg-0 text-center">Build your brand's recognition and get detailed<br/>insights on how your links are performing</p>
    </div>

    <div className="home-img col-lg-6 col-sm-12 col-lg-6 col-sm-12 d-flex justify-content-center flex-column py-3 order-lg-2 order-sm-1">
      <img src={illustration} alt="" className="illus py-sm-4 py-lg-0"/>
    </div>
  </section>
        </>
    );
}

export default Banner;