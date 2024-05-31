import brand_icon from './someAssets/icon-brand-recognition.svg'

function Advanced(){
    return (
        <>
            <section className="advanced container py-5">
    <h1 className="text-center text-weight-bold pt-4">Advanced Statistics</h1>
    <p className="adv-para text-center pt-4">Track how your links are performing around the web with<br/>our advanced statistics dashboard</p>
    
    <br/><br/><div className="adv-cards py-4 row d-flex justify-content-between">
      <div className="card card1 col-lg-3 col-sm-12 my-sm-5  my-lg-0">
        <div className="logo-sec ">
          <img src={brand_icon} alt="" width="50" height="50" className="card-icon"/>
        </div>
        <h6 className="font-weight-bold py-1 py-sm-4 py-lg-3">Brand Recognition</h6>
        <p className="text-justify">Boost your brand recognition each click. Generate links don't mean a thing. Branded links help instil confidence in your content.</p>
      </div>

      <div className="card card2 col-lg-3 col-sm-12 my-sm-5 my-lg-0">
        <div className="logo-sec">
          <img src={brand_icon} alt="" width="50" height="50" className="card-icon"/>
        </div>
        <h6 className="font-weight-bold py-1 py-sm-4 py-lg-3">Brand Recognition</h6>
        <p className="text-justify">Boost your brand recognition each click. Generate links don't mean a thing. Branded links help instil confidence in your content.</p>
      </div>
      <div className="card card3 col-lg-3 col-sm-12 my-sm-5 my-lg-0">
        <div className="logo-sec">
          <img src={brand_icon} alt="" width="50" height="50" className="card-icon"/>
        </div>
        <h6 className="font-weight-bold py-1 py-sm-4 py-lg-3">Brand Recognition</h6>
        <p className="text-justify">Boost your brand recognition each click. Generate links don't mean a thing. Branded links help instil confidence in your content.</p>
      </div>
    </div>
  </section>
        </>
    );
}

export default Advanced;