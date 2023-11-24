import { Container, BannerImg } from "./styled";
import bannerImg from "./img/banner.png";
const LandingPage = () => {
  return (
    <Container>
      <BannerImg src={bannerImg} alt="banner" />
      LandingPage입니다... WOOOOOOO~ 안ㄴ여하세요
      <p>한글 테스트</p>
      <p>
        위 코드에서 ReactDOM.render() 함수는 App 컴포넌트를 페이지의 root
        엘리먼트에 렌더링합니다. 이 과정에서 App.js 파일의 내용이 실행되기
        시작합니다. 따라서, 실행 순서는 다음과 같습니다: index.js가 실행되어
        애플리케이션의 진입점을 설정합니다. index.js에서 App 컴포넌트를
        불러옵니다. App 컴포넌트가 렌더링되면서 App.js의 내용이 실행됩니다.
        이러한 구조는 React 애플리케이션의 모듈화와 컴포넌트 기반 아키텍처를
        지원합니다. index.js는 애플리케이션을 초기화하고, App.js는
        애플리케이션의 주요 뷰나 로직을 정의합니다.
      </p>
      <p>한글 테스트</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        deserunt dignissimos facilis nulla porro quas sunt tenetur voluptatem?
        Doloribus, unde? Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Ad earum excepturi id impedit iste. Autem culpa cumque minima nisi
        voluptatibus! Ad architecto aspernatur autem consequuntur, delectus
        doloremque dolores error et excepturi exercitationem in incidunt iure
        iusto molestias nihil obcaecati possimus quia quos repellat voluptatum.
        Aut blanditiis, commodi consequatur cumque ea esse explicabo hic
        incidunt magni possimus quam quidem ratione tenetur. Earum recusanLorem
        ipsum dolor sit amet, consectetur adipisicing elit. Adipisci deserunt
        dignissimos facilis nulla porro quas sunt tenetur voluptatem? Doloribus,
        unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
        excepturi id impedit iste. Autem culpa cumque minima nisi voluptatibus!
        Ad architecto aspernatur autem consequuntur, delectus doloremque dolores
        error et excepturi exercitationem in incidunt iure iusto molestias nihil
        obcaecati possimus quia quos repellat voluptatum. Aut blanditiis,
        commodi consequatur cumque ea esse explicabo hic incidunt magni possimus
        quam quidem ratione tenetur. Earum recusanLorem ipsum dolor sit amet,
        consectetur adipisicing elit. Adipisci deserunt dignissimos facilis
        nulla porro quas sunt tenetur voluptatem? Doloribus, unde? Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Ad earum excepturi id
        impedit iste. Autem culpa cumque minima nisi voluptatibus! Ad architecto
        aspernatur autem consequuntur, delectus doloremque dolores error et
        excepturi exercitationem in incidunt iure iusto molestias nihil
        obcaecati possimus quia quos repellat voluptatum. Aut blanditiis,
        commodi consequatur cumque ea esse explicabo hic incidunt magni possimus
        quam quidem ratione tenetur. Earum recusandae repellendus sapiente
        voluptatibus. Aperiam assumenda culpa dignissimos ducimus, et facilis
        hic illum incidunt ipsam labore laborum maxime nulla numquam obcaecati
        quaerat ratione recusandae rem reprehenderit saepe sequi sint sunt totam
        unde. A aut beatae consequuntur, cum earum eius eos fugiat in ipsum
        laboriosam laborum, libero nihil, officia officiis perferendis
        perspiciatis possimus quibusdam quod unde velit. Cum dolor est molestias
        obcaecati rerum, totam vitae voluptate. Alias aliquam aspernatur commodi
        consequatur dolor ducimus ipsum iste laboriosam maiores, minima
        molestias officia placeat quod reiciendis reprehenderit sunt tempora
        vero voluptatem! Assumenda delectus dolorem dolorum ea eveniet molestiae
        neque quos! A adipisci alias libero nisi officia? Aliquam eveniet maxime
        numquam, quibusdam reprehenderit sit tempore. At doloremque error minus
        veniam voluptatum. Ad beatae, commodi dignissimos fuga hic inventore
        ipsum iusto modi molestias mollitia nam, nulla obcaecati provident quae,
        quasi quibusdam quisquam ratione vitae voluptates?
      </p>
    </Container>
  );
};

export default LandingPage;
