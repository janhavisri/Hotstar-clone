import './App.css';
import Header from './components/Head';
import Media from './components/Media';
import Mediacard from './components/Mediacard';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
  
    <div className="App">
      <Router>
  <Header></Header>
      <Media></Media>
      <div className="watch">
        <span className="span">Latest & Trending</span>
      </div>
         <div className="media-row">
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8256/1038256-v-59a659b25342"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2213/1042213-v-1416e8e25397"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1443/1041443-v-d54a72e03146"/>
        
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2256/1032256-v-00e8d16502cc"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1456/771456-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7290/767290-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3085/723085-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5856/995856-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6"/>
          </div>
          
          
      <div className="watch">
        <span className="span">Movies Recommended For You</span>
      </div>
      <div className="col-md">
      <div className="media-row">
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6941/1036941-v-b7f0f9abf579"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3299/953299-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4578/1000154578/1000154578-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/701/600701-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6539/846539-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1529/571529-v"/>
      </div></div>
      <div className="watch">
        <span className="span">Popular Shows</span>
      </div>
      <div className="col-md">
      <div className="media-row">
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9261/889261-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/907/840907-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7382/927382-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2945/1032945-v-be327eac5e4a"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7527/267527-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2028/552028-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4790/294790-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1041/951041-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2213/1042213-v-1416e8e25397"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3118/1023118-v-37c628e38897"/>
        </div></div>
      <div className="watch">
        <span className="span">Shows Recommended For You</span>
      </div>
      <div className="col-md">
      <div className="media-row">
    
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2023/552023-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5448/515448-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8774/1028774-v-85c7d8f07559"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6842/336842-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1998/921998-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/6363/6363/6363-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/4327/734327-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1996/861996-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/527/527/527-v"/>
      </div></div>
      <div className="watch">
        <span className="span">Popular in Documentry</span>
      </div>
      <div className="col-md">
      <div className="media-row">
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/SHOW/5834/15834/15834-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2735/742735-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3711/533711-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2785/742785-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/147/750147-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2137/742137-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3538/753538-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8139/898139-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/820/750820-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2348/742348-v"/>
      </div></div>
      <div className="watch">
        <span className="span">Best in Sports</span>
      </div>
    
      <div className="media-row">
        <div className="sports">
      <iframe width="300" height="300" src="https://www.youtube.com/embed/0r5NC4XMJKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="300" height="300" src="https://www.youtube.com/embed/c_wtPtPuR70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
      <iframe width="300" height="300" src="https://www.youtube.com/embed/ssEzTsg0reE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="300" height="300" src="https://www.youtube.com/embed/6X7fAfaTf50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="300" height="300" src="https://www.youtube.com/embed/oRU3WocU-cs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
      </div>
      </div>
      <div className="watch">
        <span className="span">Chhote Episodes, Free Har Roz</span>
      </div>
      <div className="col-md">
      <div className="media-row">
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9674/1019674-v-04c408d3e8b4"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6411/1036411-v-d1d14cd6f2e6"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3166/1023166-v-dfa5af5252af"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6405/1036405-v-f23f29faaa57"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6420/1036420-v-9d5e989e48c0"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6402/1036402-v-0742f7a366b6"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6409/1036409-v-261ace1b991e"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7794/977794-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7794/977794-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6409/1036409-v-261ace1b991e"/>
      </div>
      </div>
      <div className="watch">
        <span className="span">Popular Movies</span>
      </div>
      <div className="col-md">
      <div className="media-row">
  
        <div className="video">
      <iframe width="260" height="250" src="https://www.youtube.com/embed/GF0H5DZAE2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="260" height="250" src="https://www.youtube.com/embed/KPyNH7mZkGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="260" height="250" src="https://www.youtube.com/embed/pymRhLERVI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="260" height="250" src="https://www.youtube.com/embed/H04CEQLnPVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="260" height="250" src="https://www.youtube.com/embed/ZYajW2ePmFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="260" height="250" src="https://www.youtube.com/embed/gSBcDCS9xLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* <iframe width="260" height="250" src="https://www.youtube.com/embed/v4gSU1yEkpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
      </div></div>
      <div className="watch" id="kids">
        <span className="span">Best of Kids</span>
      </div>
      <div className="col-md">
      <div className="media-row">
      
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3423/753423-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3126/1003126-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4668/774668-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2474/792474-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3753/673753-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3556/753556-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3777/673777-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3779/673779-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4888/674888-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4048/674048-v"/>
      </div></div>
      <div className="watch">
        <span className="span">Popular Channels</span>
      </div>
      <div className="col-md">
      <div className="media-row">
      
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1132/661132-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1122/661122-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1171/661171-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1168/661168-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1109/661109-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1138/661138-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1133/661133-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1172/661172-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1104/661104-h"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1102/661102-h"/>
      </div></div>
      <div className="watch">
        <span className="span">Popular in Biopic</span>
      </div>
      <div className="col-md">
      <div className="media-row">
    
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1354/1000001354/1000001354-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4665/64665-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6991/666991-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6828/556828-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/704/1000090704/1000090704-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1612/871612-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1016/1041016-v-96810620f7f0"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/5481/1770015481/1770015481-v"/>
          <Mediacard img="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6427/656427-v"/>
      </div></div>
      <Footer></Footer>
      </Router>
    </div>
    
  
    

  );
}

export default App;
