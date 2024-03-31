import { CityNameFormat } from '@/utils/DescriptionFormat'
import React from 'react'

const SearchBarComponent = (props: { handleFavActive: () => void, star: string, pastSearch: boolean, favActive: boolean, magnifyingGlass: string, handleSearchButton: () => void, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void, userInput: string, handlePastSearchTrue: () => void, handlePastSearchFalse: () => void, pastSearchArray: string[], handlePastSearchClick: (p: string) => void, backArrow: string, handleRemovePastSearchFav: (p: string) => void, x: string, starOutline: string, handleSavePastSearchFav: (p: string) => void, handleRemoveFav: (p: string) => void, favoritesArray: string[] }) => {
  return (
    <div className="grid xl:grid-cols-[50%_6%_44%] mb-8">

      <div className="sm:flex sm:justify-between">
        <div className="w-[48px] h-12 p-1 bg-[#38598B] hover:bg-[#61BAC7] rounded-full sm:ml-6 sm:hidden justify-center items-center hover:cursor-pointer flex mb-6" onClick={props.handleFavActive} >
          <img src={props.star} alt="" />
        </div>
        <div className="relative w-full">
          <div className={props.pastSearch !== props.favActive ? "flex inputBg inputRounded w-full" : "flex inputBg rounded-3xl w-full"}>
            <img className="sm:mr-3 sm:ml-3 ml-2 hover:cursor-pointer" src={props.magnifyingGlass} alt="" onClick={props.handleSearchButton} />
            <input className="sm:min-h-12 min-h-10 w-full bg-transparent text-white josefin border-none sm:text-xl text-lg focus:border-none" onChange={props.handleChange} onKeyDown={props.handleKeyDown} type="text" placeholder="Search for a city" value={props.userInput} onClick={props.handlePastSearchTrue} />
            {props.pastSearch ? (<img className="mr-3 hover:cursor-pointer" src={props.x} alt="" onClick={props.handlePastSearchFalse} />) : (<div></div>)}
          </div>
          {
            props.pastSearch && !props.favActive ? (
              <div className="absolute w-full z-30">
                {
                  props.pastSearchArray.length !== 0 ? (props.pastSearchArray.map((search, i) => {
                    if (props.pastSearchArray.length < 6) {
                      return (
                        <div key={i} className={i === props.pastSearchArray.length - 1 ? "min-h-12 text-white josefin w-full  searchBg flex items-center hover:bg-gray-400 sm:text-xl text-lg bottomRadius" : "min-h-12 text-white josefin w-full  searchBg flex items-center hover:bg-gray-400 sm:text-xl text-lg"}>
                          <img className="sm:mx-3 mx-2 hover:cursor-pointer" onClick={() => props.handlePastSearchClick(search[0])} src={props.backArrow} alt="" />
                          <div className="flex justify-between w-full">
                            <p className="sm:pl-3 hover:cursor-pointer w-full" onClick={() => props.handlePastSearchClick(search[0])}>{CityNameFormat(search[0])}</p>
                            {search[1] ? (<img className="mx-3 hover:cursor-pointer" src={props.star} alt="" onClick={() => props.handleRemovePastSearchFav(search[0])} />) : (<img className="mx-3 hover:cursor-pointer" src={props.starOutline} alt="" onClick={() => props.handleSavePastSearchFav(search[0])} />)}
                          </div>
                        </div>
                      )
                    } else {
                      if (i >= 0 && i < 6) {
                        return (
                          <div key={i} className={i === 5 ? "min-h-12 text-white josefin w-full  searchBg flex items-center hover:bg-gray-400 sm:text-xl text-lg bottomRadius" : "min-h-12 text-white josefin w-full  searchBg flex items-center hover:bg-gray-400 sm:text-xl text-lg"}>
                            <img className="sm:mx-3 mx-2 hover:cursor-pointer" onClick={() => props.handlePastSearchClick(search[0])} src={props.backArrow} alt="" />
                            <div className="flex justify-between w-full">
                              <p className="sm:pl-3 hover:cursor-pointer w-full" onClick={() => props.handlePastSearchClick(search[0])}>{CityNameFormat(search[0])}</p>
                              {search[1] ? (<img className="mx-3 hover:cursor-pointer" src={props.star} alt="" onClick={() => props.handleRemovePastSearchFav(search[0])} />) : (<img className="mx-3 hover:cursor-pointer" src={props.starOutline} alt="" onClick={() => props.handleSavePastSearchFav(search[0])} />)}
                            </div>
                          </div>
                        )
                      }
                    }
                  })) : (
                    <div className="min-h-12 text-white josefin w-full searchBg text-xl flex items-center bottomRadius">
                      <h1 className="pl-16 ">No Past History</h1>
                    </div>
                  )
                }
              </div>
            ) : (
              <div></div>
            )
          }

          
          {
            !props.pastSearch && props.favActive ? (
              <div className="absolute w-full z-30 max-h-52 overflow-y-scroll scrollbar">
                <div className="min-h-12 text-yellow-200 josefin w-full searchBg font-bold text-xl flex items-center">
                  <h1 className="pl-5">Favorite Locations</h1>
                </div>
                {props.favoritesArray.length === 0 ? (
                  <div className="min-h-12 text-white josefin w-full searchBg text-xl flex items-center bottomRadius">
                    <h1 className="pl-5 ">No favorites</h1>
                  </div>
                ) : (<div></div>)}
                {
                  props.favoritesArray.map((fav, i) => {
                    return (
                      <div key={i} className={i === props.favoritesArray.length - 1 ? "min-h-12 text-white josefin w-full searchBg flex items-center hover:bg-gray-400 text-xl bottomRadius" : "min-h-12 text-white josefin w-full searchBg flex items-center hover:bg-gray-400 text-xl"}>
                        <div className="flex justify-between w-full">
                          <p className="pl-5 hover:cursor-pointer w-full" onClick={() => props.handlePastSearchClick(fav)}>{CityNameFormat(fav)}</p>
                          <img className="mx-3 hover:cursor-pointer" src={props.star} alt="" onClick={() => props.handleRemoveFav(fav)} />
                        </div>
                      </div>
                    )
                  })
                }

              </div>
            ) : (
              <div></div>
            )
          }
        </div>

        <div className="w-[52px] h-12 p-1 bg-[#38598B] hover:bg-[#61BAC7] rounded-full sm:ml-6 sm:flex justify-center items-center hover:cursor-pointer hidden" onClick={props.handleFavActive} >
          <img src={props.star} alt="" />
        </div>


      </div>

      <div>

      </div>


      <div>

      </div>

    </div>
  )
}

export default SearchBarComponent
