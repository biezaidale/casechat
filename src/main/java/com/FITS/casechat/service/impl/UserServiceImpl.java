package com.FITS.casechat.service.impl;

import com.FITS.casechat.entity.User;
import com.FITS.casechat.mapper.UserMapper;
import com.FITS.casechat.service.IUserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lxqDale
 * @since 2023-09-25
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

}
