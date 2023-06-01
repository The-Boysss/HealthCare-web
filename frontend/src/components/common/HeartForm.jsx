const HeartForm = () => {
  return (
    <div className="mt-24">
       <form className="max-w-md mx-auto">
       <div className="mb-4">
      <label htmlFor="gender" className="block font-bold mb-1">Gender</label>
        <select id="gender" name="sex" className="w-full p-2 border border-gray-300 rounded-md">
          <option value="0"></option>
          <option value="0">Female</option>
          <option value="1">Male</option>
        </select>
      </div>
      <div className="mb-4">
    <label htmlFor="age" className="block font-bold mb-1">Age</label>
    <input id="age" type="number" name="age" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="chestpain" className="block font-bold mb-1">Chestpain</label>
    <select id="chestpain" name="cp" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0"></option>
      <option value="0">typical angina</option>
      <option value="1">atypical angina</option>
      <option value="2">non-anginal pain</option>
      <option value="3">asymptomatic</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="trtbps" className="block font-bold mb-1">BP(94-300)</label>
    <input id="trtbps" type="number" step="0.01" name="trtbps" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="chol" className="block font-bold mb-1">Cholestrol(126-564)</label>
    <input id="chol" type="number" step="0.01" name="chol" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="fbs" className="block font-bold mb-1">Is Fast Blood Sugar ?</label>
    <select id="fbs" name="fbs" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0">No</option>
      <option value="1">Yes</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="restecg" className="block font-bold mb-1">Chestpain</label>
    <select id="restecg" name="rest_ecg" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0"></option>
      <option value="0">normal</option>
      <option value="1">having ST-T wave abnormality</option>
      <option value="2">showing probable or definite left ventricular hypertrophy by Estes&apos;criteria</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="thalach" className="block font-bold mb-1">Maximum Heart Rate</label>
    <input id="thalach" type="number" step="0.01" name="thalach" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
  <div className="mb-4">
    <label htmlFor="exang" className="block font-bold mb-1">Exercise induced angina</label>
    <select id="exang" name="exang" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0">No</option>
      <option value="1">Yes</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="oldpeak" className="block font-bold mb-1">Old Peak</label>
    <input id="oldpeak" type="number" step="0.01" name="thalach" className="w-full p-2 border border-gray-300 rounded-md"/>
  </div>
<div className="mb-4">
    <label htmlFor="slp" className="block font-bold mb-1">Slope of the peak exercise</label>
    <select id="slp" name="slp" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0">Unsloping</option>
      <option value="1">flat</option>
      <option value="2">downsloping</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="thall" className="block font-bold mb-1">Slope thalassemia</label>
    <select id="slp" name="slp" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0">null</option>
      <option value="1">fixed defect</option>
      <option value="2">normal</option>
      <option value="3">reversable defect</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="caa" className="block font-bold mb-1">Slope Number of major vessels</label>
    <select id="caa" name="caa" className="w-full p-2 border border-gray-300 rounded-md">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>

       </form>
    </div>
  )
}

export default HeartForm