import React from 'react';
import { StyledBanner, BannerWrapper, BannerContentIntro, BannerContentInfo } from './styles';
import CashImg from '../../assets/data.svg';
import useHistoryHook from '../../hooks/useHistory';

const HomeBanner = () => {
    const { navigate } = useHistoryHook();
    return (
        <StyledBanner>
            <BannerWrapper>
                <BannerContentIntro>
                    <div className="intro">
                        <h1>Ubold is a fully featured premium admin template</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, blanditiis commodi consequuntur culpa dignissimos, distinctio dolore dolorum libero maxime natus necessitatibus nesciunt nihil quisquam, quod reiciendis sit sunt! Animi aspernatur aut consequatur ea illo neque rem. Ad aspernatur, aut dolores eos explicabo facere id inventore, magni nemo officia perspiciatis quidem, similique voluptatibus. Aliquid animi atque eaque eos esse hic inventore ipsa magnam, minima, molestias nesciunt obcaecati optio pariatur possimus quas, quia ut. Minus molestias, numquam!</span>
                    </div><br />
                    <span className="info">
                        <input type="text" placeholder="Your Email" className="input-style" />{' '}
                        <button className="btn get-started-btn" onClick={() => navigate('/register')}>Get Started</button>
                    </span>
                </BannerContentIntro>
                <BannerContentInfo>
                    <div className="img-container">
                        <img src={CashImg} className="home-img" alt="" height="400" width="600" />
                    </div>
                </BannerContentInfo>
            </BannerWrapper>
        </StyledBanner>
    );
}

export default HomeBanner;
