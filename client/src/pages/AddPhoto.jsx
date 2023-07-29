import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataAPI from '../utils/DataAPI';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

function AddPhoto() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [generatingImg, setGeneratingImg] = useState(false);

  const [form, setForm] = useState({
    name: '',
    prompt: '',
  });

  const [photo, setPhoto] = useState({
    ...form,
    src: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRandomPrompt = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const handleGenerateImage = async () => {
    if (!form.prompt) return alert('Please enter proper prompt!');

    try {

      setGeneratingImg(true);

      const data = await DataAPI.createPhoto(form);
      setPhoto({ form: form, src: `data:image/jpeg;base64, ${data.photo}` });

    } catch (error) {
      console.log(error);
    } finally {
      setGeneratingImg(false);
    }
  };

  const handleShare = async () => {
    if (!photo.src) return alert('Please generate an image!');

    try {
      setLoading(true);

      await DataAPI.sharePhoto(photo);

      alert('Sucess');
      navigate('/');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='mt-2'>
        <h2 className='text-[30px] text-[#242428] font-bold'>Let's create!</h2>
        <p className='mt-2 text-[#777a7e] text-sm'>Generate an imaginative image through DALL-E AI and share it with the community</p>
      </div>
      <div className='mt-10'>
        <div className='flex flex-col gap-6'>
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., dalle doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
          >
            <button
              type="button"
              className='text-xs font-bold rounded-[5px] text-center text-[#2f2f2f] px-2.5 py-1 bg-[#EcECF1]'
              onClick={handleRandomPrompt}
            >
              Random Prompt!
            </button>
          </FormField>
        </div>

        <div className=''>
          {photo.src ? (
            <img src={photo.src} alt={photo.prompt} className="w-full h-full object-contain" />
          ) : (
            <img src={preview} alt="preview" className="w-11/12 h-11/12 object-contain opacity-50" />
          )}

          {generatingImg && (
            <div className='absolute flex justify-center items-center rounded-lg z-0'>
              <Loader />
            </div>
          )}
        </div>
        <div className='mt-4 flex gap-4'>
          <button
            type='button'
            className='text-white bg-green-600 rounded-md font-semibold text-sm py-2 px-4 text-center h-fit sm:w-auto'
            onClick={handleGenerateImage}
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
          <button
            type='button'
            className='text-white font-semibold text-sm bg-[#6469ff] rounded-md  py-2 px-3.5 text-center sm:w-auto'
            onClick={handleShare}
          >
            {loading ? 'Sharing' : 'Share with the community'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddPhoto