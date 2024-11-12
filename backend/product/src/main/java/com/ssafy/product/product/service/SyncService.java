package com.ssafy.product.product.service;

import com.ssafy.product.product.constant.KeyType;

public interface SyncService<T> ***REMOVED***
    void syncToReadDatabaseAsync(final KeyType keyType, final Long id, final T responseData);
    void recover(final Exception e);
***REMOVED***
