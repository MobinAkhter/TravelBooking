import "./featuredProperties.css"

export const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">La Roulotte de Ciney</span>
        <span className="fpCity">Belgium, Ciney</span>
        <span className="fpPrice">$75</span>
        <div className="fpRating">
            <button>8.4</button>
            <span>Very Good</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Wierszyki Shelters</span>
        <span className="fpCity">Poland, Zakopane</span>
        <span className="fpPrice">$120</span>
        <div className="fpRating">
            <button>9.7</button>
            <span>Exceptional</span>
        </div>

    </div>
        <div className="fpItem">

        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Ranczo w Dolinie</span>
        <span className="fpCity">Poland, Kiszkowo</span>
        <span className="fpPrice">$110</span>
        <div className="fpRating">
            <button>9.5</button>
            <span>Exceptional</span>
        </div>

    </div>
        <div className="fpItem">

        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1" alt="" className="fpImg" />
        <span className="fpName">Tiny House Dreischwesternherz</span>
        <span className="fpCity">Germany, Trier</span>
        <span className="fpPrice">$80</span>
        <div className="fpRating">
            <button>9.6</button>
            <span>Exceptional</span>
        </div>

    </div>
    </div>

  )
}
