import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = import.meta.env.VITE_API_KEY;

// Initial state
const initialState = {
  loading: null,
  error: null,
};

// Thunk for fetching weather data
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('City Not Found :(');
    }
    const data = await response.json();
    return data;
  }
);

// Thunk for fetching weather data
export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('City Not Found :(');
    }
    const data = await response.json();
    return data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false
        state.weather = action.payload
        state.error = null
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false
        state.weather = null
        state.error = action.error.message
      })
      .addCase(fetchForecast.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.loading = false
        state.forecast = action.payload
        state.error = null
      })
      .addCase(fetchForecast.rejected, (state, action) => {
        state.loading = false
        state.forecast = null
        state.error = action.error.message
      });
  },
});

export default weatherSlice.reducer;