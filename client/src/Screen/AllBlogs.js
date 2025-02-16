import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CCHeader from '../Components/CCHeader'
import LeftMenu from '../Components/LeftMenu'
import FilterListIcon from '@material-ui/icons/FilterList';
import InfoIcon from '@material-ui/icons/Info';
import allBlogsDatabase from "../Components/allBlogsDatabase.json"

const AllBlogs = () => {
    console.log(allBlogsDatabase);

    return ( 
        <GrandContainer>
            <MobContainer>
                We are still working on Responsive Version of the website, please view the site with 
                width more than 1100px, a standard laptop or tablet landscape. 
                <img src="https://media4.giphy.com/media/13FrpeVH09Zrb2/giphy.gif" alt="" />
            </MobContainer>
            <Container>
                <CCHeader />
                <LeftMenu marked={"all-blogs"} />
                <div className="cc-middle-content">
                    <h1 className='main-heading'>All Blogs <div className="head-tag">local database</div> </h1>
                    <p className="heading-supporter">
                    We have beginner friendly website contents, no fancy texts and informations. We just give as much information required by the first time reading users, because we firmly believe that when you want to learn a language you don't study it from a dictionary.
                    </p>
                    <div className="message">
                        <div className="icon"></div>
                        <div className="text">
                            We are constantly looking for good blogs. Want to be a technical content writer <a href="/">click here</a>
                        </div>
                    </div>
                    <Sort>
                        <div className="box">
                        <div className="text">By Relevence</div>
                        <FilterListIcon/>
                        </div>
                        <InfoIcon style={{fill: "#333"}}/>
                    </Sort>

                    <BlogsContainer>
                        {
                          allBlogsDatabase.map((item, index) => {
                            return (
                                <div className="blog-container" key={index}>
                                    <div className="last-updated">{item.date}</div>
                                    <a href={item.link} className="blog-title">{item.title}</a>
                                    <div className="blog-desc">{item.desc} 
                                      <div className="author">
                                        <a href={item.authorLink[0]} target="_blank">
                                          <img src={item.authorImageLink} alt="" />
                                        </a>
                                        <div className="text">Contribution by {item.author[0]} {item.author.length > 1 ? <>+ {item.author.length - 1} others</> : <></>}</div>
                                      </div>
                                    </div>

                                    <div className="blog-tags">
                                        <div className="main-tag">{item.category}</div>
                                        {
                                          item.tags.map((tag, tagIndex) => {
                                            return (
                                              <div className="tag" key={tagIndex}>{tag}</div>
                                            )
                                          } )
                                        }
                                    </div>
                                </div>
                            )
                          })
                        }
                    </BlogsContainer>
                </div>
            </Container>
        </GrandContainer>
    )
}

export default AllBlogs

const GrandContainer = styled.div`

`

const MobContainer = styled.div`
  width: 100vw;
  padding: 40px;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;

  img{
    width: calc(100% - 80px);
    margin: 40px;
    border-radius: 5px;
    display: block;
  }

  @media only screen and (min-width: 1099px){
    display: none;
  }
`

const Container = styled.div`
    @media only screen and (max-width: 1099px){
        display: none;
    }

    display: flex;
    justify-content: space-between;
    padding-left: 200px;

    a{
      color: #18489f;
    }

    .cc-middle-content{
      min-height: 100vh;
      width: 100%;
      /* padding: 80px min(120px, 5vw) 50px min(120px, 5vw); */
      padding: 80px 120px 50px 120px;
      position: relative;
      width: 100%;
      max-width: 1360px;
      min-width: 850px;
      margin: auto;
      
      @media only screen and (max-width: 1200px){
        padding: 80px 50px 50px 50px;
      }   


      .main-heading{
          font-size: 1.65rem;
          font-weight: 600;
          color: #292929;
          display: flex; 
          align-items: center;

          .head-tag{
            display: inline;
            font-size: 0.75rem;
            font-weight: 500;
            padding: 0.25rem 0.5rem;
            border-radius: 100px;
            background-color: #e5e5e5;
            margin-left: 10px;
          }
      }

      .heading-supporter{
          font-size: 1.05rem;
          margin-bottom: 10px;
          font-weight: 400;
          color: #696168;

          a{
            color: #18489f;
            font-size: 0.95rem;
            font-weight: 300;
            margin-left: 0.25rem;
          }
      }

      .message{
        display: inline-block;
        /* display: flex; */
        /* align-items: center; */
        background-color: #d5f7e1;
        border-radius: 5px;
        padding: 10px;
        margin: 20px 0 10px 0;

        .text{
            font-size: 0.8rem;
            color: #13803b;
            font-weight: 300;
            
        }
      }
    }
`

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 80px 0 10px 0;

  .filter{
    padding: 7.5px 15px;
    font-size: 0.8rem;
    border: 1px solid #b9afaf;
    border-radius: 500px;
    margin: 0px 5px 5px 0px;
    font-weight: 300;

    &:hover{
      border-color: #201f1f;
      background-color: #201f1f;
      color: #ebdddd;
      transition-duration: 250ms;
      cursor: pointer;
    }
  }

  .selected{
    /* background-color: #ded7d7;
    color: #111; */
    border-color: #201f1f;
    background-color: #201f1f;
    color: #ebdddd;
  }
`

const Sort = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 75px 0 15px 0;


  .box{
    padding: 5px 10px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 100px;
    background-color: white;
    border: 1px solid #e5e7ed;
    box-shadow: rgb(28 28 28 / 8%) 0px 2px 8px;
    margin-right: 5px;
    
    .text{
      font-size: 0.8rem;
      font-weight: 300;
      margin: 0 7.5px;
    }
  }
`

const BlogsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .blog-container{
        width: calc(50% - 30px);
        /* border: 1px solid #e5e7ed; */
        border-top: 1px solid #e5e7ed;
        min-height: 275px;
        margin-bottom: 20px;
        padding: 20px 20px 20px 5px;
        color: inherit;
        text-decoration: none;

        .last-updated{
            font-size: 0.8rem;
            font-weight: 200;
            color: #6b7281;
        }

        .blog-title{
            font-size: 1.15rem;
            font-weight: 500;
            margin: 15px 0 5px 0;
            color: #374151;
            cursor: pointer;
            text-decoration: none;
            
            &:hover{
              color: cornflowerblue;
              transition-duration: 250ms;
            }
        }


        .blog-desc{
            font-size: 0.9rem;
            font-weight: 200;
            margin-bottom: 25px;
            color: #6b7280;
            
            .author{
              display: flex;
              align-items: center;
              margin-top: 10px;

              img{
                height: 30px;
                width: 30px;
                border-radius: 100px;
                margin-right: 5px;
              }

              .text{
                font-weight: 200;
                font-size: 0.75rem;
                font-weight: 200;
                color: #6b7280;
                text-decoration: none;
              }
              
              

            }
        }


        .blog-tags{
            display: flex;
            flex-wrap: wrap;

            .main-tag{
                font-size: 0.7rem;
                padding: 5px 15px;
                border-radius: 100px;
                background-color: #f3e8ff;
                color: rgb(107, 33, 168);
                font-weight: 400;
                margin: 5px 5px 0 0;
            }

            .tag{
                font-size: 0.7rem;
                padding: 5px 15px;
                border-radius: 100px;
                background-color: #eeeeee;
                font-weight: 300;
                margin: 5px 5px 0 0;
            }
        }

        
    }
`