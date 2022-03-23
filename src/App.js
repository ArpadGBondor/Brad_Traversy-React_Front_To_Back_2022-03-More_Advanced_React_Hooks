import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import CustomHookExample1 from './components/CustomHookExample1';
import CustomHookExample2 from './components/CustomHookExample2';
import Collapse from './components/layout/Collapse';

function App() {
    return (
        <div className="container mt-5">
            <h1>More Advanced React Hooks</h1>
            <Collapse cID="useRefExample1" title="useRef Example 1">
                <UseRefExample1 />
            </Collapse>
            <Collapse cID="useRefExample2" title="useRef Example 2">
                <UseRefExample2 />
            </Collapse>
            <Collapse cID="useRefExample3" title="useRef Example 3">
                <UseRefExample3 />
            </Collapse>
            <Collapse cID="useMemoExample" title="useMemo Example">
                <UseMemoExample />
            </Collapse>
            <Collapse cID="useCallbackExample" title="useCallback Example">
                <UseCallbackExample />
            </Collapse>
            <Collapse cID="customHookExample1" title="Custom Hook Example 1">
                <CustomHookExample1 />
            </Collapse>
            <Collapse cID="customHookExample2" title="Custom Hook Example 2">
                <CustomHookExample2 />
            </Collapse>
        </div>
    );
}

export default App;
