import React, { Component } from 'react';
import './Main.css'; 


const Main = () => {
    return (
        <div class="mainBlogs">
               <div class="blogs">
                   <p><strong>i.</strong><a Class="link" href="https://breakingintostartups.com/avi-flombaum-flatiron-school/"><strong>Entreprenurship Blog</strong> </a></p>
                   <p>Date: October 2, 2018 </p>
                   <p Class="sum">Summary:
                      This Tech blog is about Flatiron school. Avi Flombaum, the Co-founder of Flatiron school shares his insights about learnig and 
                      educating oneself. Avi alreday built several companies before working in Flatiron as a co-founder. Avi’s philosophy believes 
                      that education should mold and flex to the needs of the student. On this note, he shares Flatiron's different programs and how they are
                      enabling huge financial burdens and education more accesible to the students.
                   </p>
                   <img class="image" src="https://breakingintostartups.com/wp-content/uploads/2017/04/Free-Ebook-min.png" alt="avi flombaum" height="250px" width="400px" color="yellows"/>        
               </div>

               <div class="blogs">
                   <p><strong>ii.</strong><a Class="link" href="https://cupofjo.com/" ClassName="link"> <strong>Mommy Blog</strong></a></p>
                   <p>Date: November 11, 2019 </p>
                   <p Class="sum">Summary: 
                      This is a very family oriented fun loving post. The writer is a a very happy MOMMY and planning to spend weekend with family
                      friends once kids go to sleep. They have planne to play games.. but only after kids sleep ;) !! She has mentioned few fun links that
                      are worth taking a look before you start a fun night with your friends.
                      The fun part I liked the most is this - "She pinned some fantastic MOMMY PHRASES" that I too related it with my childhood :)
                   </p>
                   <img class="image" src="https://cupofjo.com/wp-content/uploads/2019/11/Mom-Terms-Grace-Farris-CupofJo.jpg" alt="avi flombaum" height="250px" width="400px"/> 
               </div>

               <div class="blogs">
                   <p><strong>iii.</strong><a Class="link" href="https://www.niashanks.com/make-health-fitness-empowering/"><strong>Fitness Blog</strong> </a></p>
                   <p>Date: November 1, 2019 </p>
                   <p Class="sum">Summary: Countless women have been made to feel “less than” because of the popular health and fitness information they’ve received.
                      Many feel like health and fitness is too complicated, stressful, and is constantly draining their sanity.
                      But you can reclaim health and fitness. You can make it the empowering, enjoyable, sustainable lifestyle it is 
                      supposed to be. 
                   </p>
                   <img class="image" src="https://www.niashanks.com/wp-content/uploads/2019/10/makehealthandfitnesstheempoweringlifestlyeitshouldbe.jpg" alt="avi flombaum" height="250px" width="400px"/> 
               </div>
        </div>
    )
}

export default Main;
