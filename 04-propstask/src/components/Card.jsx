import {Bookmark} from 'lucide-react' 

const App= ()=>{


    return  <div className='head'>
        
        <div className='card'>

        <div>
            <div className="top">
            <img src="https://imgs.search.brave.com/Yg9ic8fIwahAk2YVZ4AGSqXYk54xJhokaG0va66AWsE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y0LzI5/LzZhL2Y0Mjk2YWUy/ZjRjNzE2NjVkZGM4/OTgwZTAyN2Y5OGFl/LmpwZw" alt="" />
            <button>Save <Bookmark size={14} / > </button>
        </div>

        <div className='centre'>
            <h3>Amazon <span>5 day ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className='tag'>
                <h4>Part-time</h4>
                <h4>Senior level</h4>
            </div>
            
            </div>
        </div>

            <div className='buttom'>
                <div><h2>$120/hr </h2>
                <p>Mumbai,India</p></div>
                
              <button>Apply Now</button>
            </div>

        </div>
    </div>
    
}

export default App