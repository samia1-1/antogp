import { Swiper } from 'antd-mobile';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import trainGif from '@/assets/jiyin/train.gif';
import predictGif from '@/assets/jiyin/predict.gif';
import './index.scss';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path)
  }


  const { t } = useTranslation();

  return (
    <div className="Home">
      <div className='sw'>

        <div title='基因组选择'>
          <Swiper
            className='swiper'
            slideSize={70}
            trackOffset={15}
            loop
            stuckAtBoundary={false}
            autoplay={true}
          >
            <Swiper.Item className='swiper-item' onClick={() => handleNavigate('/select/train')}>
              <img className='img' src={trainGif} alt="模型训练" />
              <div className='title'>{t('模型训练')}</div>
            </Swiper.Item>
            <Swiper.Item className='swiper-item' onClick={() => handleNavigate('/select/predict')}>
              <img className='img' src={predictGif} alt="表型预测" />
              <div className='title'>{t('表型预测')}</div>
            </Swiper.Item>
            <Swiper.Item className='swiper-item' onClick={() => handleNavigate('/select/combine')}>
              <img className='img' src={trainGif} alt="模型训练和表型预测一体化" />
              <div className='title'>{t('训练预测一体化')}</div>
            </Swiper.Item>
            <Swiper.Item className='swiper-item' onClick={() => handleNavigate('/select/optimal')}>
              <img className='img' src={predictGif} alt="选择最优父本或母本" />
              <div className='title'>{t('选择最优亲本')}</div>
            </Swiper.Item>
          </Swiper>
        </div>
      </div>
    </div>
  )
};

export default Home;
