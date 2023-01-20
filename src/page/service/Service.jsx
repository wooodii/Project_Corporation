import spring2021 from '../../asset/2022spring.webp';
import category from './category';
import style from './Service.module.scss';

const Service = () => {
    return (
        <>
        <img src={spring2021} alt="서비스메뉴바" />
        
        <div className={style.body}>
        <ul class="menu-hover-fill flex flex-col items-start leading-none text-2xl uppercase space-y-4">
            <li><a href="#" data-text="home">simple & minal</a></li>
            <li><a href="#" data-text="archives">archives</a></li>
            <li><a href="#" data-text="tags">tags</a></li>
            <li><a href="#" data-text="categories">categories</a></li>
            <li><a href="#" data-text="about">about</a></li>
        </ul>
        </div>

        <ul>
            <li>
                simple & minal
                {category.map((i, index) => (
                    <div>
                        {i.id}
                        {i.title}
                        {i.sub}

                        {i.next}
                    </div>
                ))}
                
            </li>

        </ul>
        </>
    );
}
 
export default Service;