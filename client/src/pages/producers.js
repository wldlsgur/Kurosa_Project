import WrapDiv from "../components/common/Wrapper";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import LogoImg from "../components/result/logoImg";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import React from "react";
import useHref from "../hooks/useHref";

function Producers() {
    const twitterOpen = useHref("https://twitter.com/Kurosa_2023");
    const instagramOpen = useHref(
        "https://www.instagram.com/invites/contact/?i=1gq2pxjxahja9&utm_content=pw8ma4h"
    );
    
    const { t, i18n } = useTranslation();
    const pData = t("producers", { returnObjects: true });
    
    return (
        <WrapDiv url={"/assets/Images/talkBackground.gif"}>
            <Header></Header>
            <PWDiv>
            {
                pData.map((item, idx) => 
                <PDiv key={idx}>
                    <PImg src="\assets\Qnaimges\qna5-1.gif"></PImg>
                    <Tdiv>
                        <Title>{item.title}</Title>
                    </Tdiv>
                    {
                        item.list.map((value, idx) =>
                            <React.Fragment key={idx}>
                                <div></div>
                                <Info >{value}</Info>
                            </React.Fragment>   
                        )
                    }
                </PDiv>
            )}
            </PWDiv>
            <Nav>
                <Tw size={20} onClick={twitterOpen}></Tw>
                <FaInstagram
                    size={20}
                    color="#00FF00"
                    onClick={instagramOpen}
                ></FaInstagram>
            </Nav>
            <LogoImg></LogoImg>
            <Footer></Footer>
        </WrapDiv>  
    );
}

const Tw = styled(FaTwitter)`
    color:#00FF00;
    margin-right: 5%;
`;
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 7% 0 0;
    
`;
const PImg = styled.img`
    width: 52px;
    height: 37px;
`
const PDiv = styled.div`
    witdh: 100%;
  
    display: grid;
    grid-auto-flow : row;
    grid-template-columns: 20% 80%;
    padding : 0 0 15% 0;
`;

const Tdiv = styled.div`
    display: flex;
    align-items: center;
`;
const Title = styled.p`
    font-family: "Ycomputer";
    font-style: ;
    font-size: 21px;
    line-height: 21px;
    color: #00ff00;
`;

const Info = styled.p`
    font-family: "Ycomputer";
    font-style: normal;
    font-size: 17px;
    line-height: 27px;
    color: #00ff00;
`;
const PWDiv = styled.div`
    witdh: 100%;
  
    display: flex;
    flex-direction: column;
    padding: 0 7% 0 7%;
`;




export default Producers;