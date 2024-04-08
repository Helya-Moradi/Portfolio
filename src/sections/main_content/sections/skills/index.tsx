import Template from "src/sections/main_content/components/template";
import style from "./index.sass"
import Range from "src/sections/main_content/components/range";

function Skills() {
    return (
        // TODO: add children
        <Template title='Skills' color='lightPurple' direction='rtl'>
            <div className={style.skills}>
                <Range title='html5' percent={95}/>
                <Range title='css' percent={80}/>
                <Range title='javascript' percent={75}/>
                <Range title='typescript' percent={80}/>
                <Range title='react' percent={90}/>
                <Range title='sass/scss' percent={90}/>
                <Range title='bootstrap4' percent={60}/>
                <Range title='graphql,rest api' percent={70}/>
                <Range title='webpack' percent={50}/>
                <Range title='git,github' percent={75}/>
                <Range title='figma' percent={50}/>
            </div>
        </Template>
);
}

export default Skills;