import styles from './PaginaInicial.module.scss';
import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import banner from './banner.png';

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem na Terra vista do espaço" />
          </div>
        </section>
      </main>
    </>
  );
}
