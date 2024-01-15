import styles from "./css/Container.module.css"

function  Container({margem,gaps,paddings,background,children,classAdicional,classAdicional2,classAdicional3,altura,largura,linear}){

  const margin = margem ? {margin:margem} : {}
  const padding = paddings ? {padding:paddings} : {}
  const gap = gaps ? {gap:gaps} : {}
  const height = altura ? {minHeight:altura}:{minHeight:"unset"};
  const widthStyle = largura ? {minWidth:largura}:{minWidth:"unset"};


    return (
          <div  
          className={`${styles.container} ${styles[classAdicional]} ${styles[classAdicional2]} ${styles[classAdicional3]}`}
          style={{ ...margin, ...gap,...height,...widthStyle, ...padding}} 
          >
            {children}
          </div>
    )
}

export default Container;