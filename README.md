# publish-ui

## Basic Coding Conventions 
- 스코핑을 위한 접두사 o2o 사용하며, 커스텀이 필요할 경우 modifier 활용
- 클래스네이밍은 Kebab-case와 BEM을 사용
- 공통 모듈/컴포넌트의 경우 접두사 "module-" 사용
- 시맨틱태그 header, section, footer를 사용하되 section의 경우 div와 의미가 같으므로 의미가 아닌 영역 구분 용도로 사용한다
- Breakpoint는 따로 두지 않고 최소,최대 넓이만 지정
- Browser-sync 가 적용되어 있으므로 실행(gulp default) 시 자동으로 브라우저가 실행되며 에디터 내에서 저장 시 브라우저에 자동으로 동기화

## 실행 가이드
- 소스트리 등 GUI 활용 자유

1. 프로젝트 저장소(git) 생성 및 클론 받기, 기본 폴더 및 파일 생성 (공유 파일 실행 시 생략)
2. Node.js 및 npm 설치
    - gulp 와 node 간 버전 차이 이슈로 v18.17.0 -> **v14.21.3** 변경 필요
    - **node -v : v14.21.3**
    - **npm -v : 9.6.7**
3. publish-ui 폴더 내에서 **npm install** 실행
4. mall 폴더로 진입하여 **gulp default** 실행

* Gulp 버전이 해당 프로젝트보다 버전이 낮거나 높을 경우 (일치하지 않을 경우) publish-ui에서 gulp 재설치 (npm install gulp)

* localhost 실행 세팅이 되어있지 않을 경우 httpd.conf 수정 필요
    Mac: Macintosh HD(최상위 폴더) > (ctrl+shift+.)private > etc > https.conf
    - DocumentRoot "프로젝트 경로"
    - Directory "프로젝트 경로"
    수정 후 아파치 재시작 (sudo apachectl restart)
