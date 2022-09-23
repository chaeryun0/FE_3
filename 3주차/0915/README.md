
# 📚 CSS Selector

## 1. 속성 선택자

<image src="https://user-images.githubusercontent.com/112460430/191996389-96a164d5-8d6c-4d57-8b46-07587545b84d.png" width="40%">

## 2. 가상 클래스 선택자(Pseudo class selector)

> **실재로 html에 존재하지 않는 클래스지만 마치 클래스가 존재하는것 처럼 작동** <br>

```
<ul>
	<li class="foo">1</li>    <!-- .foo:first-child --> class="foo"인 엘리먼트 중 첫번째 자식인 엘리먼트를 선택
	<li class="foo">2</li>    
	<li class="foo">3</li>    <!-- .foo:nth-child(3) -->  class="foo"인 엘리먼트 중 n번째 자식인 엘리먼트를 모두 선택
	<li class="foo">4</li>
	<li class="foo">5</li>    <!-- .foo:last-child --> class="foo"인 엘리먼트 중 마지막 자식인 엘리먼트를 선택
</ul>
````
> **상호 작용을 위한 가상클래스** : ```:hover```, ```:active```, ```:focus```, ```:checked``` 

## 3. 가상 요소 선택자

#### ::before
> 요소의 맨 첫번째 자식으로 HTML코드에 존재하지 않는 가상요소를 하나 생성 <br>

#### ::after
> 요소의 맨 마지막 자식으로 HTML코드에 존재하지 않는 가상요소를 하나 생성<br>
  
#### ::selection
> 사용자가 선택하여 하이라이트 된 상태의 텍스트를 선택
  <br>
  
## 🤔 **::** 가상 요소 선택자 vs 가상 클래스 선택자 **:**
  
- 가상 요소 선택자는 콜론이 2개 vs 가상 클래스 선택자는 1개 <br>
  → 간혹 가상요소 선택자에 콜론이 1개만 보이는 경우는 레거시 브라우저 호환을 위한 선택 (Internet Explorer 8이하) <br>
- 가상 요소 선택자는 마크업 없는 요소를 삽입 vs 가상 클래스 선택자는 클래스 없는 요소에 클래스 삽입 <br>
  
  
  
