# BOJ10818

<Scanner vs BufferedReader>
1. 버퍼(Buffer)의 크기
- Scanner: 버커크기가 1KB로 작음. 데이터를 읽을 때마다 즉시 처리에 가까움.
- BufferedReader: 이름 그대로 8KB의 거대한 버퍼를 가짐. 데이터를 한꺼번에 듬뿍 담아두고 거기서 꺼내 쓰기 때문에 입출력 횟수가 줄어들어 훨씬 빠름.
2. 가공 vs 날것 (Parsing vs Reading)
- Scanner: nextInt(), nextFloat() 등을 호출하면 내부적으로 정규 표현식(Regex)을 써서 데이터를 분석하고 형변환까지 해줌. 편리하지만, 정규식은 계산비용이 비싸서 느림.
- BufferedReader: 그냥 문자열(String)로만 읽어옴. "난 읽기만 할테니, 숫자로 바꾸는 건 네가 해"라는 식. 그래서 빠름.

특징		Scanner				BufferedReader
속도		느림(데이터 많으면 위험)	압도적 빠름
편의성		높음(형변환 자동)		낮음(String만 반환, 예외처리 필수)
스레드 안전 	No				Yes(Thread-safe)

<StringTokenizer>
: BufferedReader는 한 주을 통째로 읽어오기 때문에(readLine()), 공백으로 구분된 숫자들을 처리하려면 StringToeknizer가 꼭 필요함.

<예외처리>
throws IOException 선언 이유
- Checked Exception: '이것은 위험하니까 코드 작성부터 대비책을 세워'라는 자바 언어차원에서 강제하는 에러.
- BufferedReader.readLine() 메서드는 내부적으로 '입출력 중에 문제가 생길 수 있음'을 예고함. 그러므로, throws(책임전가)나 try-catch(직접 해결)을 해야한다.
	throws(책임전가)							try-catch(직접해결)
장점	코드 깔끔								에러 발생해도 프로그램 종료 안하고 복구하거나 메시지 띄울 수 있음
단점	에러발생시 프로그램 비정상 종료						코드가 길어지고 가독성 떨어짐
예시	'에러 날 수 있는데, 여기서 처리 안하고 나를 호출하는 곳을 던질게'	'에러가 나면 내가 여기서 잡고 어떻게 할지 정할게'
