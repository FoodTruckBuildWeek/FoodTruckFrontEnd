import React from "react";
import "../App.css";

import styled from 'styled-components';
import pizza from '../images/pizza.jpg';
import tacos from '../images/tacos.jpg';
import sandwich from '../images/sandwich.jpg';
import donuts from '../images/donuts.jpg';
import diners from '../images/diners.jpg';
import tealtruck from '../images/tealtruck.jpg';


    
  const Wrapper = styled.div`
    padding: 4em;
    background: papayawhip;
    border: dotted turquoise 2px;
    display:flex;
    text-align:center;
    padding: 10px;
    margin: 8%;
    margin-bottom: -7%;
  `;
  const ImageWrapper = styled.div`
    align-items: center;
    padding: 5%;
  `;
  const Title = styled.h1`
    font-size: 3em;
    text-align: center;
    padding: 10px;
    font-family: "Poppins", sans-serif;
  `;
  const Title2 = styled.h2`
    font-size: 2em;
    text-align: center;
    padding-top: 20px;
    font-family: "Poppins", sans-serif;
  `;
  const WrapperP = styled.p`
    text-align:;
    margin: 5px;
  `;
  const Bg= styled.div`
    background-size:70%;
    background-position:center;
    background-repeat: no-repeat;
  `; 
  const Header= styled.header`
    height:80vh;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: bottom;
    text-align:center;
  `;
  const Text= styled.p`
    font-size: 18px;
    margin-top: 5px;
    margin: 40px;
    padding: 10px;
    text-align: center;
  `;
  const HomePage = () => {
    return (
  <div>
  <Wrapper>
    <div>
      <Title>Food Truck Foodies</Title>
      <div>
      <img src={tealtruck} alt="teal food truck" />
      </div>
        <Text>
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jicama salsify.Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard. 
        </Text>
    </div>
  </Wrapper>

  <Wrapper>     
    <ImageWrapper>
    <img src={diners} alt="food trucks" />
    </ImageWrapper>    
        <WrapperP>
        <Title2>Our Story</Title2>
          <Text>
            <br></br>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.<br></br>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.  Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
          </Text>     
        </WrapperP>
  </Wrapper>

  <Wrapper>
    <ImageWrapper>
    <img src={pizza} alt="pizza slice" />
    </ImageWrapper>  
        <WrapperP>
        <Title2>Pizza!</Title2>
          <Text>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.<br></br>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
          </Text>
        </WrapperP>
  </Wrapper>

  <Wrapper>  
    <ImageWrapper>
    <img src={sandwich} alt="sandwiches" />
    </ImageWrapper> 
        <WrapperP>
        <Title2>Sandwiches!</Title2>
          <Text>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
          </Text>
        </WrapperP>
  </Wrapper>
     
  <Wrapper>
    <ImageWrapper>
    <img src={tacos} alt="tacos" />
    </ImageWrapper>
        <WrapperP>
        <Title2>Tacos!</Title2>
          <Text>
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jï¿½cama salsify.<br></br>
          Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard. 
          </Text>
        </WrapperP>
  </Wrapper>

  <Wrapper>
    <ImageWrapper>
    <img src={donuts} alt="donuts" />
    </ImageWrapper>
        <WrapperP>
        <Title2>And...Don't Forget The Donuts!</Title2>
          <Text>
          Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jï¿½cama salsify.<br></br>        
          Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard. 
          </Text>
        </WrapperP>
  </Wrapper>
  </div>
  ); 
  };

  

export default HomePage;
