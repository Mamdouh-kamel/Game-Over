import axios from "axios";



//---------------------------------------------------- Home Api -----------------------------------------------------------
const home = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {'sort-by': 'popularity'},
    headers: {
      'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  export let resultHome = axios.request(home).then(function ({data}) {
      // console.log(data);
      return data;
  
  }).catch(function (error) {
      return error
  });

//---------------------------------------------------- All Api -----------------------------------------------------------

const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {platform: 'all'},
    headers: {
      'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      
    }
  };
  
  export let resultAll = axios.request(options).then(function ({data}) {
      // console.log(data);
      return data;
  }).catch(function (error) {
      // console.error(error);
      return error
  });
  

//---------------------------------------------------- Pc Api -----------------------------------------------------------
const pc = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {platform: 'pc'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultPc = axios.request(pc).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- Browser Api -----------------------------------------------------------
const browser = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {platform: 'browser'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultBrowser = axios.request(browser).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});

//---------------------------------------------------- Alphapet Api -----------------------------------------------------------
const alphapet = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {'sort-by': 'alphabetical'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultAlphapet = axios.request(alphapet).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- ReleaseDate Api -----------------------------------------------------------
const releaseData = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {'sort-by': 'release-date'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultReleaseDate = axios.request(releaseData).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- Popularity Api -----------------------------------------------------------
const popularity = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {'sort-by': 'popularity'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultPopularity = axios.request(popularity).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- Relevance Api -----------------------------------------------------------
const relevance = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {'sort-by': 'relevance'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultRelevance = axios.request(relevance).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- Shooter Api -----------------------------------------------------------
const shooter = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'shooter'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultShooter = axios.request(shooter).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- Fantasy Api -----------------------------------------------------------
const fantasy = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'fantasy'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultFantasy = axios.request(fantasy).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- Battle Api -----------------------------------------------------------
const battle = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'battle-royale'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultBattle = axios.request(battle).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});

//---------------------------------------------------- Social Api -----------------------------------------------------------
const social = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'social'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultSocial = axios.request(social).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});

//---------------------------------------------------- Sports Api -----------------------------------------------------------
const sports = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'sports'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultSports = axios.request(sports).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});

//---------------------------------------------------- Zombie Api -----------------------------------------------------------
const zombie = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'zombie'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultZombie = axios.request(zombie).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- Flight Api -----------------------------------------------------------
const flight = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'flight'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultFlight = axios.request(flight).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- OpenWorld Api -----------------------------------------------------------
const openWorld = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'open-World'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultOpenWorld = axios.request(openWorld).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});
//---------------------------------------------------- Racing Api -----------------------------------------------------------
const racing = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'racing'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultRacing = axios.request(racing).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});

//---------------------------------------------------- ActionRbj Api -----------------------------------------------------------
const actionRbj = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'action-rpg'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultActionRbj = axios.request(actionRbj).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});

//---------------------------------------------------- Action Api -----------------------------------------------------------
const action = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {category: 'action'},
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    
  }
};

export let resultAction = axios.request(action).then(function ({data}) {
    // console.log(data);
    return data;
}).catch(function (error) {
    // console.error(error);
    return error
});


 ////---------------------------------------------------- Details Api -----------------------------------------------------------


export const GameOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

export let resultDetails = async(url,options)=>{
  let {data}=await axios.get(url,options);
  return data;
}
 ////---------------------------------------------------- Regestration Api -----------------------------------------------------------


export let axiosPost = async (form_Data, endPoint) => {
    let {data} = await axios.post(`https://route-movies-api.vercel.app/${endPoint}`,form_Data);
    return data
 };
 
 ////---------------------------------------------------- Social Api -----------------------------------------------------------
// function demo(params) {
//   const social = {
//     method,
//     url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
//     params:{},
//     headers: {
//       'X-RapidAPI-Key': '2ed0011366msha313b99f492b3cfp1133cfjsn92f83a94bd97',
//       'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'

//     }
//   };

//   let resultSocial = axios.request(social).then(function ({ data }) {
//     // console.log(data);
//     return data;
//   }).catch(function (error) {
    // console.error(error);
//     return error
//   });

//   return resultSocial
// }

// demo('GET',{category:"soc"})
