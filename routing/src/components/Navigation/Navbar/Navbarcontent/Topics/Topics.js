import React from 'react'
import './Topics.css';
 
 import topic_img from '../../../../Images/codebg3.jpg' ; 

const Topics = () => {
    return (
        <div>
            <section id='topics'>
                <div className='topics container'>
                    <div className='topics-header' >
                        <h1 className='topics-title'> Recent <span>Topics</span></h1>
                    </div>
                    <div className='all-topics'>
                       
                      
                    <div className='topic-item'>
                            <div className='topic-info'>
                                <h1 > Topic-1</h1>
                                <h2>Coding Love</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea maxime qui? Aliquid ab id
                                    ullam nihil esse laudantium dignissimos accusamus pariatur mollitia totam ex laboriosam
                                    deleniti, nisi dicta</p>
                            </div>
                            <div className='topic-image'>
                                <img src={topic_img} alt="img" />
                            </div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-info'>
                                <h1 > Topic-1</h1>
                                <h2>Coding Love</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea maxime qui? Aliquid ab id
                                    ullam nihil esse laudantium dignissimos accusamus pariatur mollitia totam ex laboriosam
                                    deleniti, nisi dicta</p>
                            </div>
                            <div className='topic-image'>
                                <img src={topic_img} alt="img" />
                            </div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-info'>
                                <h1 > Topic-1</h1>
                                <h2>Coding Love</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea maxime qui? Aliquid ab id
                                    ullam nihil esse laudantium dignissimos accusamus pariatur mollitia totam ex laboriosam
                                    deleniti, nisi dicta</p>
                            </div>
                            <div className='topic-image'>
                                <img src={topic_img} alt="img" />
                            </div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-info'>
                                <h1 > Topic-1</h1>
                                <h2>Coding Love</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea maxime qui? Aliquid ab id
                                    ullam nihil esse laudantium dignissimos accusamus pariatur mollitia totam ex laboriosam
                                    deleniti, nisi dicta</p>
                            </div>
                            <div className='topic-image'>
                                <img src={topic_img} alt="img" />
                            </div>
                        </div>
                       
                    </div>
                    
                </div>

            </section>
        </div>
    )
}

export default Topics