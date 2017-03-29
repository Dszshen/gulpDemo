package com.bs3.manage.common.util;

import java.util.List;


public class Pageable<T> {

    private long total;
    private long pageSize;
    private long currentPage;
    private List<T> items;
    private long totalPage;
    private long start;

    public Pageable(long total, long pageSize, long currentPage) {
        this.total = total;
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.totalPage = (long) Math.ceil(total * 1.0 / pageSize);
        this.currentPage = Math.max(Math.min(currentPage, this.totalPage), 1);
        this.start = (this.currentPage - 1) * this.pageSize;
    }

    public long getTotal() {
        return total;
    }

    public long getPageSize() {
        return pageSize;
    }

    public long getCurrentPage() {
        return currentPage;
    }

    public List<T> getItems() {
        return items;
    }

    public long getTotalPage() {
        return totalPage;
    }

    public long getStart() {
        return start;
    }

    public void setItems(List<T> items) {
        this.items = items;
    }
}

	
