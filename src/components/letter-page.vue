<template>
    <div>
        <div v-for="num in 4">
            <div class="box shadow">
                <div class="circle"></div>
            </div>
        </div>
        <div id="overlay" class="background"></div>
        <!-- ==================================== -->
        <div id="overlay-content">
            <h2>Hello</h2>
        </div>
        <!-- ============================ -->
        <div class="container">
            <div class="letter-shadows">
                <span>s</span>
                <span>h</span>
                <span>a</span>
                <span>d</span>
                <span>o</span>
                <span>w</span>
                <span>s</span>
            </div>
        </div>
        <!-- ======================== -->
        <div class="terminal">
            <code>
                fdljfdljjlfjdlsj
            </code>
        </div>
        <!-- ================================= -->
    <div>
        <!-- <input id="slider" class="customSlider" type="checkbox">
        <label for="slider"></label> -->

        <div class="wrapper">
            <div class="top-icons">
                <i class="fas fa-long-arrow-alt-left"></i>
                <i class="fas fa-ellipsis-v"></i>
                <i class="far fa-heart"></i>
            </div>
            
            <div class="profile">
                <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" class="thumbnail">
                <div class="check"><i class="fas fa-check"></i></div>
                <h3 class="name">Beverly Little</h3>
                <p class="title">Javascript Developer</p>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam aliquid porro!</p>
                <button type="button" class="btn">Hire Me</button>
            </div>
            
            <div class="social-icons">
                <div class="icon">
                    <a href="/"><i class="fab fa-dribbble"></i></a>
                    <h4>12.8k</h4>
                    <p>Followers</p>
                </div>
                
                <div class="icon">
                    <a href="#"><i class="fab fa-behance"></i></a>
                    <h4>12.8k</h4>
                    <p>Followers</p>
                </div>
                
                <div class="icon">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <h4>12.8k</h4>
                    <p>Followers</p>
                </div>
            </div>
        </div>

        <div class="concept">
            <a href="https://dribbble.com/shots/4346772-Profile-Card" target="_blank">
                <i class="fab fa-dribbble"></i>
            </a>
        </div>    
    </div>        
    </div>
</template>
<style lang="stylus" scoped>
.box {
    width: 25%;
    min-width: 250px;
    display: block;
    height: 50px;
    position: relative;
    border-radius: 5px;
    background: linear-gradient(to right, #abbd73 35%, #d6e2ad 100%);
    margin-bottom: 40px;
    padding: 15px 25px 0 40px;
    color: darkslategray;
    box-shadow: 1px 2px 1px -1px #777;
    transition: background 200ms ease-in-out;
}

.shadow {
    position: relative;

    &:before {
        z-index: -1;
        position: absolute;
        content: '';
        bottom: 13px;
        right: 7px;
        width: 75%;
        top: 0;
        box-shadow: 0 15px 10px #777;
        transform: rotate(4deg);
        transition: all 150ms ease-in-out;
    }
}

.box:hover {
    background: linear-gradient(to right, #abbd73 0%, #abbd73 100%);
}

.shadow:hover::before {
    transform: rotate(0deg);
    bottom: 20px;
    z-index: -10;
}

.circle {
    position: absolute;
    top: 14px;
    left: 15px;
    border-radius: 50%;
    box-shadow: inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5), inset 0 0 0 25px antiquewhite;
    width: 20px;
    height: 20px;
    display: inline-block;
}

// ===============
#overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    filter: blur(20px); // saturate(180%);
    pointer-events: none;
    clip-path: url('#modal');

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: white;
        display: block;
        opacity: 0.3;
    }
}

#overlay-content {
    // position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    // top: 25%;
    // bottom: 25%;
    // left: 16.666%;
    // right: 16.666%;
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid white;
    padding: 10px;
    box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.45);

    h2 {
        font-size: 30px;
    }
}

// ====================
.container {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.letter-shadows {
    position: relative;
    text-transform: uppercase;
    text-shadow: -15px 5px 20px #ced0d3;
    color: white;
    letter-spacing: -32px;
    font-family: 'Anton', Arial, sans-serif;
    user-select: none;
    text-transform: uppercase;
    font-size: 150px;
    transition: all 0.25s ease-out;
}

.shadows:hover {
    text-shadow: -16px 6px 15px #ced0d3;
}

// ==================================================
.terminal {
    width: 800px;
    margin: 30px auto;
    box-sizing: border-box;
    font-size: 16px;
    min-height: 300px;
    background-color: #0f3642;
    color: #b4c4c6;
    padding: 10px;
    border-radius: 0 0 7px 7px;
    position: relative;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 0 30px 1px rgba(0, 0, 0, 0.2);

    &::before {
        border-radius: 7px 7px 0 0;
        position: absolute;
        content: attr(data-content);
        display: block;
        left: 0;
        right: 0;
        text-overflow: ellipsis;
        padding: 0 80px;
        white-space: nowrap;
        overflow: hidden;
        height: 25px;
        line-height: 25px;
        text-align: center;
        color: #4c3436;
        font-size: 1em;
        background: linear-gradient(0deg, #d8d8d8, #ececec);
        top: -25px;
        left: 0;
        font-family: 'PT Sans', sans-serif;
    }

    &::after {
        content: '';
        position: absolute;
        top: -18px;
        left: 10px;
        width: 12px;
        height: 12px;
        background: #f95c5b;
        border-radius: 100%;
        box-shadow: 0 0 0 1px #da3d42, 22px 0 0 0 #fabe3b, 22px 0 0 1px #ecb03e, (12px + 10px) * 2 0 0 0 #38cd46, (12px + 10px) * 2 0 0 1px #2eae32;
    }

    code {
        margin: 0;
        color: #ddd;
        font-size: 20px;
    }
}

// ========================================

$purple-gradient= linear-gradient(45deg, rgba(87,29,146,1) 0%,rgba(172,25,102,1) 100%);
$purple-gradient= linear-gradient(to bottom right, #C90A6D, #FF48A0);
$blue1-gradient= linear-gradient(to bottom right, #5E5AEC, #3F9EFC);
$blue2-gradient= linear-gradient(to bottom right, #6452E9, #639FF9);
$shadow= 0 13px 26px rgba(#000, .2), 0 3px 6px rgba(#000, .2);

// ------------------------------------------------

.customSlider {
  opacity: 0;
  display: none;
	+ label {
		position: relative;
		top: 35px;
		left: 15px;
		cursor: pointer;
		&:before, &:after {
			background: #FFFFFF;
			position: absolute;
			content: '';
		}
		&:before {
			top: -90px; left: -60px;
			width: 80px;
			height: 40px;
			background: #ccc;
			border-radius: 20px;
			transition: background .75s;
		}
		&:after {
			height: 34px; width: 34px;
			top: -87px; left: -55px;
			border-radius: 50%;
			transition: all .5s;
		}
	}
	
	&:checked + label:after {
		height: 34px; width: 34px;
		top: -87px; left: -19px;
		border-radius: 50%;
	}
	
	&:checked ~ .wrapper {
		color: #fff;
		transition: background .6s ease;
		background: #31394D;
		.top-icons {
			i {
				color: #fff;
			}
		}
		.profile {
			// &:after {background: #ececece;}
			.name {color: #FDFEFF;}
			.title {color: #7C8097;} 
			.description {color: #FDFEFF;}
		}
		.icon {
			h4 {color: #FFFFFF;}
			p {color: #666B7D;}
		}
	}
}

.wrapper {
    margin: 0 auto;
  width: 320px;
  height: 540px;
  background: #FDFEFF;
	transition: background .6s ease;
	border-radius: 10px;
	padding: 20px 20px 20px 20px;
	box-shadow: 0 8px 40px rgba(#000000, .2);
	
	.top-icons {
		i {
			color: #080911;
			&:nth-of-type(1) {
			float: left;
			}
			&:nth-of-type(2) {
				float: right;
			}
			&:nth-of-type(3) {
				float: right;
				padding-right: .8em;
			}
		}
	}
	.profile {
		margin-top: 2.2em;
		position: relative;
		
		&:after {
			width: 100%;
			height: 1px;
			content: ' ';
			display: block;
			margin-top: 1.3em;
			background: #E9EFF6;
		}
		
		.check {
			position: absolute;
			right: 5em;
			bottom: 12.7em;
			i {
				color: #fff;
				width: 20px;
				height: 20px;
				font-size: 12px;
				line-height: 20px;
				text-align: center;
				border-radius: 100%;
				background: $purple-gradient;	
			}
		}
		.thumbnail {
			width: 124px;
			height: 124px;
			display: flex;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 1.5em;
			border-radius: 100%;
			box-shadow: $shadow;
		}
		.name {
			color: #2D354A;
			font-size: 24px;
			font-weight: 600;
			text-align: center;
		}
		
		.title {
			color: #7C8097;
			font-size: .75em;
			font-weight: 300;
			text-align: center;
			padding-top: .5em;
			padding-bottom: .7em;
			letter-spacing: 1.5px;
			text-transform: uppercase;
		}
		
		.description {
			color: #080911;
			font-size: 14px;
			font-weight: 300;
			text-align: center;
			margin-bottom: 1.3em;
		}
		
		.btn {
			color: #fff;
			width: 130px;
			height: 42px;
			outline: none;
			border: none;
			display: block;
			cursor: pointer;
			font-weight: 300;
			margin-left: auto;
			margin-right: auto;
			border-radius: 70px;
			box-shadow: 0 13px 26px rgba(#000, .16), 0 3px 6px rgba(#000, .16);
			background: $purple-gradient;
		}
	}
	
	.social-icons {
		display: flex;
		margin-top: 1.2em;
		justify-content: space-between;
		
		.icon {
			display: flex;
			align-items: center;
			flex-direction: column;
			a {
				color: #fff;
				width: 60px;
				height: 60px;
				font-size: 28px;
				line-height: 60px;
				text-align: center;
				border-radius: 30px;
				box-shadow: $shadow;
			}
			&:nth-of-type(1) {
				a {background: $purple-gradient;}
			}
			&:nth-of-type(2) {
				a {background: $blue1-gradient;}
			}
			&:nth-of-type(3) {
				a {background: $blue2-gradient;}
			}
			
			h4 {
				color: #080911;
				font-size: 1em;
				margin-top: 1.3em;
				margin-bottom: .2em;
			}
			
			p {
				color: #666B7D;
				font-size: 12px;		
			}
		}
	}
}

.concept {
	position: absolute;
	bottom: 25px;
	color: #AAB0C4;
	font-size: .9em;
	font-weight: 400;
	a {
		color: rgba(172,25,102,1);
		text-decoration: none;
	}
}
</style>
