import React, { useState, useEffect } from 'react';

const App = () => {
	const [dataList, setDataList] = useState(null);
	useEffect(() => {
		console.log(1)
	})
	return <div>{'hello'}</div>
}

export default App;