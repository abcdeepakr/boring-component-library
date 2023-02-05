# Boring Component Library

# Timeline Component

##### Snippet
```jsx
import {
  Separator,
  TimelineItem,
  TimelineItemBody,
  TimelineItemContent,
  TimelineItemDate,
  TimelineItemTitle,
} from "@deepakr-28/boring-component-library";
export default function Home() {
  return (
    <>
      <TimelineItem>
        <TimelineItemDate>28 Jan, 2023</TimelineItemDate>
        <Separator />
        <TimelineItemContent>
          <TimelineItemTitle>
            Today was a good day
          </TimelineItemTitle>
          <TimelineItemBody>
            Seven, even back do' Lil Joe
            I picked up the cash flow
            Then we played bones, and I'm yellin' "Domino!"
            Plus nobody I know got killed in South Central LA
            Today was a good day!
          </TimelineItemBody>
        </TimelineItemContent>
      </TimelineItem>
    </>
  );
}
```

##### Component UI

![](https://ik.imagekit.io/6rhjv1amjqq/documentation_images/timeline_gkRBrompH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674902072713)


# Modal Component

##### Snippet

```jsx
import {Modal} from "@deepakr-28/boring-component-library";

  <Modal show={show} onClose={modalHandler}>
    // Modal Content goes here
    // You can add anything here
  </Modal>
```
| PropName  |datatype   |
|---|---|---|---|---|
| show  | boolean  |
| onClose  | function  |

Example


```jsx
import { useState } from "react";
import { Modal } from "@deepakr-28/boring-component-library";

export default function Home() {
  const [show, setShow] = useState(false); // stores modal state
  
  // function opens/closes modal based on actions
  function modalHandler() {
    setShow(!show);
  }

  return (
    <>
      /* 
      when we click on the image
      modal opens
      */
      <img
        alt="image"
        src={`https://images.pexels.com/photos/14130951/pexels-photo-14130951.jpeg`}
        height="250"
        width="250"
        onClick={() => modalHandler()}
      />

      // Our modal component
      <Modal show={show} onClose={modalHandler}>
          // Modal content, same image, but bigger!
          <img
            alt="image"
            src={`https://images.pexels.com/photos/14130951/pexels-photo-14130951.jpeg`}
            height="700"
            width="700"
            }
          />
      </Modal>
    </>
  );
}

```

##### Component UI

![](https://ik.imagekit.io/6rhjv1amjqq/documentation_images/Untitled_video_-_Made_with_Clipchamp__2__y-uOCwuGP.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1675569337045)