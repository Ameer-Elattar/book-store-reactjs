import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addBook,
  deleteBook,
  getAllBooks,
  getBookByID,
  updateBook,
} from "../API/BooksAPI";
const initialState = {
  books: [],
  error: false,
  isLoading: false,
};

export const getAllBooksAction = createAsyncThunk(
  "book/getAllBooksAction",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getAllBooks();
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addBookAction = createAsyncThunk(
  "book/addBookAction",
  async (book, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await addBook(book);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateBookAction = createAsyncThunk(
  "book/updateBookAction",
  async (bookdata, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await updateBook(bookdata.book, bookdata.id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteBookAction = createAsyncThunk(
  "book/deleteBookAction",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await deleteBook(id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getBookByIDAction = createAsyncThunk(
  "book/getBookByIDAction",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await getBookByID(id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    deleteB(state, action) {
      state.books = state.books.filter((book) => book.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBooksAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBooksAction.fulfilled, (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllBooksAction.rejected, (state, action) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
